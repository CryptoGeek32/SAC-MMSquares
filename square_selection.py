import json

from flask import Flask, request, jsonify

app = Flask(__name__)

# Load existing data from the JSON file (if any)
try:
    with open('selected_squares.json', 'r') as file:
        data = json.load(file)
except FileNotFoundError:
    data = {}

def select_square(square_number, discord_name):
    # Mark the square as taken by the given Discord name
    data[str(square_number)] = discord_name

def get_taken_squares():
    # Retrieve all taken squares
    return data

def save_data():
    # Save the updated data back to the JSON file
    with open('selected_squares.json', 'w') as file:
        json.dump(data, file, indent=4)

# Example usage:
select_square(42, 'my_discord_user')
select_square(17, 'another_user')

# Get all taken squares
taken_squares = get_taken_squares()
print(taken_squares)

@app.route('/select_square', methods=['POST'])
def select_square():
    data = request.get_json()
    square_number = data.get('squareNumber')
    discord_name = data.get('discordName')

    # Update your data (e.g., mark the square as taken)

    # Save the updated data (e.g., save to the JSON file)

    return jsonify({'message': f'Square {square_number} selected by {discord_name}'})

if __name__ == '__main__':
    app.run(debug=True)

# Save the data
save_data()

