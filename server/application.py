from flask import Flask, request
from predictor import predict

application = Flask(__name__, static_folder='./static', static_url_path='/')

@application.route('/')
def home():
    return application.send_static_file('index.html')
    
@application.route('/search',methods=['POST'])
def search():
    mode = request.json.get("mode", None)
    query = request.json.get("query", None)

    if mode is None or query is None:
        return "Missing post parameter", 400

    res = predict(mode, query)
    imgNameToUrl(res)
    # print(res)
    return res

def imgNameToUrl(res):
    for components in [res["input"], res["output"], res["brain"]]:
        for c in components:
            c["imgUrl"] = f"{request.host_url}images/{c['imgFile']}"
            del c["imgFile"]

@application.errorhandler(404)   
def not_found(e):   
  return application.send_static_file('index.html')


    
if __name__ == "__main__":
    application.run()
