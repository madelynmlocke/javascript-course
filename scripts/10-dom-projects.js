    function isSubscribed() {
      const subscribeElement = document.querySelector('.subscribe');
      if(subscribeElement.innerHTML === 'Subscribe') {
        subscribeElement.innerHTML = 'Subscribed';
      } else {
        subscribeElement.innerHTML = 'Subscribe';
      }
    }
  
    function handleCostKeyDown(event) {
      if (event.key === 'Enter') {
        calculateTotal();
  }
    }

    function calculateTotal() {
      const costInput = document.querySelector('.js-cost-input');
      let cost = Number(costInput.value);
      console.log(cost);
      if (cost < 40) {
          cost += 10;
      }
      document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
    }