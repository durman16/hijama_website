import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    calendar?: {
      schedulingButton?: {
        load: (options: {
          url: string;
          color?: string;
          label: string;
          target: HTMLElement;
          branding?: boolean;
        }) => void;
      };
    };
  }
}

const CalendarButton = () => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src*="scheduling-button-script.js"]')) {
      initializeButton();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';

    script.onload = initializeButton;
    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const initializeButton = () => {
    if (!buttonContainerRef.current) return;
    if (!window.calendar?.schedulingButton?.load) {
      console.error('Google Calendar Scheduling Button script not loaded properly');
      return;
    }

    window.calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Inyh5pERWrWO37-6x0_x5rQFgyUXxTr9uG3bZOUwRI_rj3atM20dMzwhvSDpHuFPttK2XSE0M?gv=true',
      color: '#33B679',
      label: 'Book an appointment',
      target: buttonContainerRef.current,
      branding: false
    });
  };

  return <div ref={buttonContainerRef} style={{ minHeight: '5px' }} />;
};

export default CalendarButton;