const text = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power.`,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave.`,
  ];
  
  document.querySelector(".lorem-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const amount = parseInt(document.getElementById("amount").value);
    const result = document.querySelector(".lorem-text");
    
    if (isNaN(amount) || amount < 1 || amount > 9) {
      const random = Math.floor(Math.random() * text.length);
      result.innerHTML = `<p>${text[random]}</p>`;
    } else {
      const selectedText = text.slice(0, amount).map(paragraph => `<p>${paragraph}</p>`).join("");
      result.innerHTML = selectedText;
    }
  });
  