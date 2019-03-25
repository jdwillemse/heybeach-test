// I arbitrarily chose 1 hour as the login session length
const SESSION_DURATION = 60 * 60 * 100;
const STORGE_KEY = 'authenticationSession';

export function startSession(email, token) {
  const sessionData = {
    email,
    token,
    expires: Date.now() + SESSION_DURATION
  };
  console.log({ sessionData });

  sessionStorage.setItem(STORGE_KEY, JSON.stringify(sessionData));
}

export function getSession() {
  const storedSession = sessionStorage.getItem(STORGE_KEY);
  let sessionData = JSON.parse(storedSession || '{}');

  if (!storedSession) {
    return {};
  }

  return {
    ...sessionData,
    isLoggedIn: Date.now() < sessionData.expires
  };
}

export function clearSession() {
  sessionStorage.removeItem(STORGE_KEY);
}
