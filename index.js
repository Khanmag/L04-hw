

const coffeeMachine = {
  coffeeType: null,
  sugarSpoonsCount: 0,
  makeCoffee() {
    const coffeeTypeNum = +prompt("Какое кофе желаете? (1. Американо, 2. Капучино, 3. Эспрессо") 
    if (coffeeTypeNum === 1) this.coffeeType = "Американо"
    else if (coffeeTypeNum === 2) this.coffeeType = "Капучино"
    else if (coffeeTypeNum === 3) this.coffeeType = "Эспрессо"
    else return alert("Такого мы не делаем(")

    let userWantMore = confirm("Положить вам ложечку сахара?")
    while(userWantMore) {
      this.sugarSpoonsCount++
      userWantMore = confirm("ещё ложечку?")
    } 

    alert(`Ваш кофе готов, ${this.coffeeType}, ложек сахара: ${this.sugarSpoonsCount}`)
    const wantOneMoreCoffee = confirm("Желаете ещё кофе?") 
    if (wantOneMoreCoffee) this.makeCoffee()
  }
}

coffeeMachine.makeCoffee()
