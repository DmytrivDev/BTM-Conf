document.querySelectorAll('.addCalendar').forEach(button => {
  button.addEventListener('click', function () {
    const item = this.closest('.calendar');

    const timeText = item.dataset.time;
    const title = item.dataset.title || '';
    const description = item.dataset.speakers || '';
    const location = item.dataset.location || '';

    const today = new Date().toISOString().split('T')[0];
    const [startTime, endTime] = timeText.split(' - ').map(time => time.trim());

    function formatDateTime(date, time) {
      return (
        new Date(`${date}T${time}:00`)
          .toISOString()
          .replace(/[-:]/g, '')
          .split('.')[0] + 'Z'
      );
    }

    const startDateTime = formatDateTime(today, startTime);
    const endDateTime = formatDateTime(today, endTime);

    const baseUrl =
      'https://calendar.google.com/calendar/render?action=TEMPLATE';

    const googleCalendarUrl = `${baseUrl}
      &text=${encodeURIComponent(title)}
      &dates=${startDateTime}/${endDateTime}
      &details=${encodeURIComponent(description)}
      &location=${encodeURIComponent(location)}
      &sf=true&output=xml`.replace(/\s+/g, '');

    window.open(googleCalendarUrl, '_blank');
  });
});
