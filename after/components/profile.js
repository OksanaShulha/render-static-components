const profile = () => {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile');
    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('avatar');
    profileDiv.appendChild(avatarDiv);
    const avatarPic = document.createElement('img');
    avatarPic.src = "../img/posts/default-user.png";
    avatarPic.setAttribute('alt', 'User');
    const descDiv = document.createElement('div');
    descDiv.classList.add('desc');
    const userLink = document.createElement('a');
    userLink.href = '../#';
    userLink.innerText = userName;
    const span = document.createElement('span');
    span.innerHTML = `
    Followed by <a href="../#">another-user</a> and more 12
    people`
    return profileDiv;
}