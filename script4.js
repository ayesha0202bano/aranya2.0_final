var interestCounts = JSON.parse(localStorage.getItem('interestCounts')) || {};

    document.querySelectorAll('.interested-btn').forEach(function(btn) {
        var eventKey = btn.getAttribute('data-event');
        var countSpan = btn.querySelector('.interest-count');

        if (interestCounts[eventKey]) {
            countSpan.textContent = interestCounts[eventKey];
        }

        btn.addEventListener('click', function() {
             {
                interestCounts[eventKey]++
                countSpan.textContent ++;
            }
            localStorage.setItem('interestCounts', JSON.stringify(interestCounts));
        });
    });