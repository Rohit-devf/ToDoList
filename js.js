let note = document.querySelector(".answer");

let out = document.querySelector(".note");

let inner = document.querySelector(".inner-text");


note.addEventListener("click", function () {

    if (inner.value.trim() === "") {
        return;
    }

    let task = document.createElement("div");

    task.classList.add("task");


    let rem = document.createElement("button");

    rem.innerText = "remove";

    rem.classList.add("remove");


    let boses = document.createElement("input");

    boses.type = "checkbox";


    task.append(boses);

    task.append(inner.value);

    task.append(rem);


    out.append(task);


    rem.addEventListener("click", function () {

        task.remove();

    });


    let i = 1;

    boses.addEventListener("click", function () {

        if (i === 1) {

            task.style.textDecoration = "line-through";

            i = 0;

        } else {

            task.style.textDecoration = "none";

            i = 1;

        }

    });


    inner.value = "";

});