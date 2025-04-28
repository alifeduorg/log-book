// When the form is submitted
document.getElementById('logbook-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    var formData = {
        date: document.getElementById('date').value,
        teacher_name: document.getElementById('teacher_name').value,
        staff_id: document.getElementById('staff_id').value,
        program: document.getElementById('program').value,
        class: document.getElementById('class').value,
        student_name: document.getElementById('student_name').value,
        subject: document.getElementById('subject').value,
        class_in: document.getElementById('class_in').value,
        class_duration: document.getElementById('class_duration').value,
        taught_today: document.getElementById('taught_today').value,
        student_engagement: document.getElementById('student_engagement').value,
        homework_given: document.getElementById('homework_given').value,
        work_type: document.getElementById('work_type').value,
        upload_work: document.getElementById('upload_work').value,
        share_moments: document.getElementById('share_moments').value
    };

    // Send the form data to your Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxcw7miU9-2Tw7CYbnvgjx10gVHSjdPs00nOrHhalOzhuZgQWm7BT4PggtL6deiZ0_Exg/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Logbook submitted successfully!');
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        alert('Fetch error: ' + error.message);
    });
});
