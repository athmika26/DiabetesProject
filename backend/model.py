import sys
import json
import os
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

input_data_json = sys.argv[1]
input_data = json.loads(input_data_json)

glucose = float(input_data['glucose'])
bloodPressure = float(input_data['bloodPressure'])
pregnancies = float(input_data['pregnancies'])
dpf = float(input_data['dpf'])
bmi = float(input_data['bmi'])
age = float(input_data['age'])
skinThickness = float(input_data['skinThickness'])
insulin = float(input_data['insulin'])

new_input_data = [[pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, dpf, age]]

script_dir = os.path.dirname(os.path.realpath(__file__))
csv_path = os.path.join(script_dir, 'diabetes.csv')

diabetes_df = pd.read_csv(csv_path)

X = diabetes_df.drop('Outcome', axis=1)
y = diabetes_df['Outcome']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
final_input_data = scaler.transform(new_input_data)

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

predictions = model.predict(final_input_data)
predicted_class = int(predictions[0])

result = {'prediction': predicted_class}

print(json.dumps(result))