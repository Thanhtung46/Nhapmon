// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const bidButtons = document.querySelectorAll('.bid-button');

  bidButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const bidInput = card.querySelector('.bid-input');
      const currentBidElem = card.querySelector('.bid-amount');
      const currentBid = parseInt(currentBidElem.textContent.replace(/[^0-9]/g, ''));
      const newBid = parseInt(bidInput.value);

      if (newBid > currentBid) {
        currentBidElem.textContent = `${newBid.toLocaleString()} VNĐ`;
        alert('Đấu giá thành công!');
      } else {
        alert('Giá đấu phải lớn hơn giá hiện tại!');
      }

      bidInput.value = ''; // Xóa giá trị sau khi đấu giá
    });
  });
});
