pip install flask

# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Initialize an empty dictionary to store selected squares
selected_squares = {}

@app.route('/select_square', methods=['POST'])
def select_square():
    data = request.get_json()
    square_number = data.get('squareNumber')
    discord_name = data.get('discordName')

    # Mark the square as taken by the given Discord name
    selected_squares[square_number] = discord_name

    return jsonify({'message': f'Square {square_number} selected by {discord_name}'})

@app.route('/get_taken_squares', methods=['GET'])
def get_taken_squares():
    return jsonify(selected_squares)

if __name__ == '__main__':
    app.run(debug=True)
