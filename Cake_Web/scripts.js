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
// JavaScript: Xử lý form khiếu nại
document.getElementById('complaintForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const complaint = document.getElementById('complaint').value;

  // Tạo object chứa dữ liệu khiếu nại
  const complaintData = {
    name: name,
    email: email,
    complaint: complaint,
  };

  // Gửi dữ liệu đến backend (API)
  fetch('https://example.com/api/complaint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(complaintData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Gửi khiếu nại thất bại');
      }
    })
    .then((data) => {
      document.getElementById('complaint-message').textContent =
        'Khiếu nại đã được gửi thành công!';
      document.getElementById('complaintForm').reset();
    })
    .catch((error) => {
      document.getElementById('complaint-message').textContent =
        'Đã xảy ra lỗi, vui lòng thử lại!';
    });
});
