const suggestions = () => {
    const divSuggestions = document.createElement('div');
    divSuggestions.classList.add('suggestions');
    const header = document.createElement('h3');
    divSuggestions.appendChild(header);
    header.innerText = 'Suggestions for you';
    divSuggestions.appendChild(profile());
    

    // ${user_nick}
    // 'Followed by ${another_user} and more 12 people'
}