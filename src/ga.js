import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-T4EEP82VG5';
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (name = 'Measurement') => {
    const eventTracker = (action = 'click', description = 'button') => {
        ReactGA.event(name, { action: action, description: description });
    };
    return eventTracker;
};

export default useAnalyticsEventTracker;
