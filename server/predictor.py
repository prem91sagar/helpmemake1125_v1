import requests
import nltk
import pandas as pd
import joblib

from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

def predict(mode, query):
    search_id = query
    result_in = []
    result_out = []
    result_brain = []

    url = "https://api.datamuse.com/words?ml="
    list_words = search_id.split(" ")

    for i in list_words:
        temp_out  = []
        temp_in  = []
        i = i.rstrip()
        url_temp = url+i

        r = requests.get(url = url_temp)
        data = r.json()
        temp_in = in_put(i) 
        temp_out = out_put(i)
        for j in data[:2]:
            result_in.extend(temp_in)
            result_out.extend(temp_out)
            temp_in = in_put(i)
            temp_out = out_put(i)


        result_brain = brain()

    result_in = set(result_in)
    result_out = set(result_out)


    store_data = pd.read_csv('_static/store/store_data.csv')
    store_data.loc[store_data.shape[0]] = [store_data.shape[0]] + [search_id] + [result_in] + [result_out] + [0]
    store_data.to_csv("_static/store/store_data.csv",index=False)

    context_dict = {
        "input": [ to_component_format(c) for c in result_in],
        "output" : [ to_component_format(c) for c in result_out ],
        "brain" : [ to_component_format(c) for c in result_brain ],
    }

    return context_dict

def to_component_format(name):
    return {
      "name": name.title(),
      "imgFile": "banaao_logo.jpg",
      "url": "https://www.banaao.co.in/"
    }

def in_put(test_data_inp):
    test_data = " ".join([stemmer.stem(i) for i in nltk.word_tokenize((test_data_inp.lower()))])
    test_data = [test_data]
    classifier = joblib.load('_static/input/input.pkl')
    predict = classifier.predict(test_data)
    predict = str(predict).strip("[,',]")
    dataframe_in = pd.read_csv('_static/input/input_dataframe.csv')
    res = dataframe_in[dataframe_in['Key']==predict]['Responses'].to_list()
    res = res[0].split(",")
    res[0] = res[0][1:]
    for i in range(len(res)):
        res[i] = res[i].replace("'", "")
        res[i] = res[i].upper()

    res[len(res)-1] = res[len(res)-1].strip(']')
    return res

def out_put(test_data_out):
    test_data = " ".join([stemmer.stem(i) for i in nltk.word_tokenize((test_data_out.lower()))])
    test_data = [test_data]
    classifier = joblib.load('_static/output/output.pkl')
    predict = classifier.predict(test_data)
    predict = str(predict).strip("[,',]")
    dataframe_out = pd.read_csv('_static/output/output_dataframe.csv')
    res = dataframe_out[dataframe_out['Key']==predict]['Responses'].tolist()
    res = res[0].split(",")
    res[0] = res[0][1:]
    for i in range(len(res)):
        res[i] = res[i].replace("'", "")
        res[i] = res[i].upper()

    res[len(res)-1] = res[len(res)-1].strip(']')
    return res

def brain():
    brain = ['ARDUINO']
    return brain

def convert(set):
    return [*set, ]