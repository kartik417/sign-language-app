from fastapi import FastAPI
from pydantic import BaseModel
import base64
import numpy as np
import cv2
from tensorflow.keras.models import load_model

app = FastAPI()

# 🔥 Load model
model = load_model("signlanguagedetectionmodel48x48.h5")

# 🔥 Try full A-Z (important)
labels = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

class ImageData(BaseModel):
    image: str


@app.post("/predict")
def predict(data: ImageData):
    try:
        # 🔥 Base64 decode
        img_data = data.image.split(",")[1]
        img_bytes = base64.b64decode(img_data)

        # 🔥 Convert to numpy
        np_arr = np.frombuffer(img_bytes, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # 🔥 Resize
        img = cv2.resize(img, (48, 48))

        # 🔥 Convert to grayscale
        img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # 🔥 Normalize
        img = img / 255.0

        # 🔥 Reshape
        img = img.reshape(1, 48, 48, 1)

        print("Shape:", img.shape)

        # 🔥 Predict
        prediction = model.predict(img)

        print("RAW:", prediction)
        print("ARGMAX:", np.argmax(prediction))

        result = labels[np.argmax(prediction)]

        print("FINAL:", result)

        return {"text": result}

    except Exception as e:
        print("ERROR:", str(e))
        return {"text": "Error"}