from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# This would typically be replaced with a database
# For simplicity, using hardcoded usernames and passwords
valid_credentials = {
    'admin': 'password123',
    'teacher': 'teacherpass',
    'student': 'studentpass'
}

@app.route('/', methods=['GET', 'POST'])
def login():
    error_message = None

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in valid_credentials and valid_credentials[username] == password:
            # Authentication successful, redirect to the appropriate dashboard
            if username == 'admin':
                return render_template('dashboard.html', error_message=error_message if 'error_message' in locals() else None)
            elif username == 'teacher':
                return render_template('teacher.html', username=username)
            elif username == 'student':
                return render_template('student1.html', username=username)
        else:
            # Authentication failed, set an error message
            error_message = 'Invalid username or password'

    return render_template('main.html', error_message=error_message)

@app.route('/main_page')
def main_page():
    # This is a placeholder for the main page after successful login
    return 'Welcome to the main page!'

if __name__ == '__main__':
    app.run(debug=True)
