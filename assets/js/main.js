function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");

    if (sidebar.style.left === "-280px") {
        sidebar.style.left = "0";
        content.style.marginLeft = "280px";
    } else {
        sidebar.style.left = "-280px";
        content.style.marginLeft = "0";
    }
}

$(document).ready(function () {
    $(".sidebar ul li").on('click', function () {
        $(".sidebar ul li.active").removeClass('active');
        $(this).addClass('active');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 2,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


// Calender
// Get current date
const currentDate = new Date();

// Set initial month and year
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Function to render the calendar
function renderCalendar() {
    // Get the calendar days container
    const calendarDays = document.getElementById('calendar-days');

    // Clear any existing calendar days
    calendarDays.innerHTML = '';

    // Set the current month and year in the header
    document.getElementById('current-month-year').textContent = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Get the first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Get the number of days in the month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create empty grid cells for previous month's days
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty-cell');
        calendarDays.appendChild(emptyCell);
    }

    // Create calendar days
    for (let day = 1; day <= totalDays; day++) {
        const calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');
        calendarDay.textContent = day;

        // Highlight the current day
        if (day === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            calendarDay.classList.add('current-day');
        }

        calendarDays.appendChild(calendarDay);
    }
}

// Function to navigate to the previous month
function previousMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
}

// Function to navigate to the next month
function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
}

// Function to navigate to the previous year
function previousYear() {
    currentYear--;
    renderCalendar();
}

// Function to navigate to the next year
function nextYear() {
    currentYear++;
    renderCalendar();
}

// Attach event listeners to navigation buttons
document.getElementById('prev-month-btn').addEventListener('click', previousMonth);
document.getElementById('next-month-btn').addEventListener('click', nextMonth);
document.getElementById('prev-year-btn').addEventListener('click', previousYear);
document.getElementById('next-year-btn').addEventListener('click', nextYear);

// Initial rendering of the calendar
renderCalendar();
