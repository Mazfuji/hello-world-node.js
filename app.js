const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

@app.route('/temperature', methods=['GET'])
def get_temperature():
    try:
        with open('/sys/class/thermal/thermal_zone0/temp', 'r') as f:
            temp = float(f.read().strip()) / 1000.0  # ミリケルビンから摂氏に変換
        return jsonify(temperature=temp, unit="celsius")
    except Exception as e:
        return jsonify(error=str(e)), 500

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
}); 
