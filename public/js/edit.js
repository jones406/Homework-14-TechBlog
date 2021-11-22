const newFormHandler = async (event) => {
    event.preventDefault();

    const id = document.getElementById('postUpdate').innerHTML
    const name = document.querySelector('#post_name').value.trim();
    const post_content = document.getElementById('#post_content').value.trim();

    if (name && post_content) {
        const response = await fetch(`/api/blogentry/edit/${id}`, {
            method: 'POST',
            body: JSON.stringify({ id, name, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Sorry I ain't made yer post.");
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.getAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/blogentry/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert("Sorry I caint delete yer post.");
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
