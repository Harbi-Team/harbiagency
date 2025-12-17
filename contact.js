import PocketBase from 'pocketbase';

const pb = new PocketBase('https://aslan.pockethost.io');

// Form submit handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');

    // Disable button and show loading
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    formMessage.style.display = 'none';

    try {
        // Get form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            company: formData.get('company') || '',
            phone: formData.get('phone') || '',
            email: formData.get('email'),
            message: formData.get('message'),
            status: 'Pending'
        };

        // Send to PocketBase
        const record = await pb.collection('harbiagencycom_contact').create(data);

        // Success
        formMessage.style.display = 'block';
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.';

        // Reset form
        e.target.reset();

    } catch (error) {
        // Error
        console.error('Form submission error:', error);
        formMessage.style.display = 'block';
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan email ile iletişime geçin.';
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
});
