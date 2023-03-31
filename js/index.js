var div,
    container = document.getElementById("container");

// с использованием var
// for (var i = 0; i < 5; i++) {
//     div = document.createElement("div");
//     div.onclick = function() {
//         alert("This is box #" + i);
//     };
//     div.style.backgroundColor = `rgb(${15*i}, ${5*i}, ${20*i})`
//     container.appendChild(div);
// }
// с использованием let
divs();

document.body.innerHTML += `
<section>
    <header>
        <h1>Пробуем новое</h1>
    </header>
    <footer>
        <p>copyright ${new Date().getDate()} | Пробуем новое</p>
    </footer>
</section>
`;

// const logCompliment = function(name) {
//     return (`You're doing great!${name}`);
// };
// const logCompliment2 = name => `You're doing well! ${name}`;
// alert(logCompliment('Имячко'));
// alert(logCompliment2('Имячко'));

function divs() {
    for (let i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.onclick = function () {
            alert("This is box #" + i);
        };

        // это чтобы различать коробки
        div.style.backgroundColor = `rgb(${15 * i}, ${5 * i}, ${20 * i})`;

        container.appendChild(div);
    }
}
