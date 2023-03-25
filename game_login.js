function addUser() {
    p1name = document.getElementById("player1_name_input").value;
    p2name = document.getElementById("player2_name_input").value;

        localStorage.setItem("player1_name", p1name);
        localStorage.setItem("player2_name", p2name);

        window.location = "game_page.html";
}