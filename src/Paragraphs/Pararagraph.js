import React from 'react'
import Graph from "../Graph/Graph"
const Pararagraph = () => {
  return (
    <>
        <h1>XG Boost algorithm Code</h1>
        <p>#First XGBoost model for Pima Indians dataset</p>
        <p>#import numpy as np</p>
        <p>from numpy import loadtxt</p>
        <p>from xgboost import XGBClassifier</p>
        <p>from sklearn.model_selection import train_test_split</p>
        <p>from sklearn.metrics import accuracy_score</p>
        <p>from xgboost import XGBRegressor</p>
        <p>from matplotlib import pyplot</p>
        <p>from sklearn.metrics import mean_squared_error</p>
        <p>from sklearn.metrics import r2_score</p>
        <p># load data</p>
        <p>dataset = loadtxt('train_test_amazon.csv', delimiter=",")</p>
        <p># split data into X and y</p>
        <p>X = dataset[:,0:9]</p>
        <p>Y = dataset[:,9]</p>
        <p># split data into train and test sets</p>
        <p>seed = 7</p>
        <p>test_size = 0.573</p>
        <p>X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=test_size, random_state=seed)</p>
        <p># fit model no training data</p>
        <p>model = XGBRegressor(use_label_encoder=False)</p>
        <p>model.fit(X_train, y_train)</p>
        <p> make predictions for test data</p>
        <p>y_pred = model.predict(X_test)</p>
        <p>predictions = [round(abs(value)) for value in y_pred]</p>
        <p># evaluate predictions</p>
        <p>totsal=0</p>
        <p>predsale=0</p>
        <p>#accuracy = accuracy_score(y_test, predictions)</p>
        <p>for i in range(len(y_test)):</p>
        <p> print('expected=%.1f, predicted=%.1f' % (y_test[i], predictions[i]))  </p>
        <p>totsal=totsal+y_test[i]</p>
        <p>predsale=predsale+predictions[i]</p>
        <p>#print("Accuracy: %.2f%%" % (accuracy * 100.0))</p>
        <p>#print("MSE")</p>
        <p>#print(mean_squared_error(y_test, predictions))</p>
        <p>print("RMSE")</p>
        <p>#print(mean_squared_error(totsal, predsale, squared=False))</p>
        <p>print(mean_squared_error(y_test, predictions, squared=False))</p>
        <p>print("total actual sale 2019: %.2f" % (totsal))</p>
        <p>print("total pred sale 2019: %.2f" % (predsale))</p>
        <p>pyplot.plot(y_test, label='Expected', color="c")</p>
        <p>pyplot.plot(predictions, label='Predicted', color="r", linestyle=':')</p>
        <p>pyplot.legend()</p>
        <p>pyplot.show()</p>
        <Graph />
    </>
  )
}

export default Pararagraph