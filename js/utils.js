Array.prototype.unique = function () {
    return [...new Set(this)];
};

function updateTranslatesCount(value) {
    const translatesCountContainer = document.querySelector(
        ".form__add-single-word .translates__count"
    );
    const translates = document.querySelectorAll(
        ".form__add-single-word [name='translate']"
    );
    translatesCountContainer.textContent = value ?? translates.length;
}

function resetTextInput(input) {
    input.value = "";
}

function removeContainerChildren(container) {
    container.innerHTML = "";
}

function getValueFromSelect(select) {
    return select.options[select.selectedIndex].textContent;
}

function setInvalidFeedback(input, feedback) {
    input.setCustomValidity(feedback);
    input.nextElementSibling.querySelector(".invalid").innerHTML = feedback;
}

function resetFeedbacks(form, feedbackSelector = "[data-default-feedback]") {
    const feedbacks = form.querySelectorAll(feedbackSelector);
    feedbacks.forEach(feedback => feedback.textContent = feedback.dataset.defaultFeedback);
}

function markFormValidated(form) {
    form.classList.add("validated");
}

function resetForm(form) {
    form.classList.remove("validated");
    form.reset();
    resetFeedbacks(form);
}