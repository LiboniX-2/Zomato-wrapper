document.addEventListener("DOMContentLoaded", function () {
    console.log("Zomato clone loaded!");

    const searchInput = document.querySelector("input[placeholder^='Search']");
    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                alert(`You searched for: ${searchInput.value}`);
            }
        });
    }
});
