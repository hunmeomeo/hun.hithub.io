document.addEventListener("DOMContentLoaded", () => {
    const networkGrid = document.querySelector('.network-grid');
    const numberOfDots = 100;
    const dots = [];
    const speed = 0.05; // Tốc độ di chuyển chậm

    // Tạo các điểm
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.top = `${Math.random() * 100}vh`; // Vị trí bắt đầu ngẫu nhiên từ dưới lên
        dot.style.left = `${Math.random() * 100}vw`;
        networkGrid.appendChild(dot);
        dots.push(dot);
    }
    
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    networkGrid.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const updateLines = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach((dot1, index1) => {
            const rect1 = dot1.getBoundingClientRect();
            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.top + rect1.height / 2;
            
            dots.forEach((dot2, index2) => {
                if (index1 !== index2) {
                    const rect2 = dot2.getBoundingClientRect();
                    const x2 = rect2.left + rect2.width / 2;
                    const y2 = rect2.top + rect2.height / 2;
                    const distance = Math.hypot(x2 - x1, y2 - y1);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`; // Đường nối màu trắng
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });
        });
    };

    const animate = () => {
        dots.forEach(dot => {
            const top = parseFloat(dot.style.top);
            const left = parseFloat(dot.style.left);
            
            // Di chuyển từ dưới lên trên
            const newTop = top - speed; // Giảm giá trị top để điểm di chuyển lên trên
            if (newTop < -5) { // Nếu điểm ra ngoài màn hình ở trên, đưa nó về dưới cùng
                dot.style.top = '100vh';
            } else {
                dot.style.top = `${newTop}vh`;
            }

            // Giữ nguyên vị trí theo chiều ngang
            dot.style.left = `${left}vw`;
        });

        updateLines();
        requestAnimationFrame(animate);
    };

    animate();
});