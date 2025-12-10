// Global error handlers for better debugging
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error || event.message, event);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

window.onload = () => {
    try {
        const buttons = document.querySelectorAll('button');
        const display = document.getElementById('display');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.innerText;

                if (value === 'C') {
                    display.value = '';
                    return;
                }

                if (value === '=') {
                    try {
                        // Use eval carefully; log the expression for debugging
                        console.debug('Evaluating expression:', display.value);
                        display.value = eval(display.value);
                    } catch (err) {
                        console.error('Evaluation error:', err);
                        display.value = 'Error';
                    }
                    return;
                }
                display.value += value;
            });
        });
    } catch (err) {
        console.error('Error in window.onload handler:', err);
    }
}