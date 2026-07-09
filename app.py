from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def home():
    # ส่งหน้า index.html ออกไปแสดงผล
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    print("🚀 Server running at http://localhost:5000")
    app.run(port=5000, debug=True)