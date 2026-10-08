import { useEffect, useState, type FormEvent } from 'react';

type Tab = 'login' | 'signup';

interface PasswordFieldProps {
  label: string;
  autoComplete: string;
  placeholder: string;
}

const field = (data: FormData, name: string) => String(data.get(name) ?? '').trim();

function PasswordField({ label, autoComplete, placeholder }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  return (
    <label>{label}
      <span className="pw">
        <input type={visible ? 'text' : 'password'} name="pw" autoComplete={autoComplete} placeholder={placeholder} />
        <button type="button" className="show" onClick={() => setVisible(v => !v)}>
          {visible ? 'Hide' : 'Show'}
        </button>
      </span>
    </label>
  );
}

function LoginForm() {
  const [error, setError] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!field(data, 'id') || !field(data, 'pw')) {
      setError('Fill in all required fields to continue.');
      return;
    }
    setError('');
    // TODO: call your login API here
  };

  return (
    <form className="panel" onSubmit={onSubmit} noValidate>
      <label>Email or phone
        <input type="text" name="id" autoComplete="username" placeholder="01XXXXXXXXX" />
      </label>
      <PasswordField label="Password" autoComplete="current-password" placeholder="Enter your password" />
      <a className="forgot" href="#">Forgot password?</a>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="submit">Log in</button>
    </form>
  );
}

function SignupForm() {
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!field(data, 'phone') || !field(data, 'pw') || !data.get('terms')) {
      setError('Fill in all required fields to continue.');
      return;
    }
    setError('');
    // TODO: call your registration API here
  };

  return (
    <form className="panel" onSubmit={onSubmit} noValidate>
      <label>Phone number
        <input type="tel" name="phone" inputMode="numeric" placeholder="01XXXXXXXXX" />
      </label>
      <label>Verification code
        <span className="pw">
          <input type="text" name="otp" inputMode="numeric" maxLength={6} placeholder="6-digit code" />
          <button type="button" className="show" disabled={cooldown > 0} onClick={() => setCooldown(60)}>
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Send code'}
          </button>
        </span>
      </label>
      <PasswordField label="Password" autoComplete="new-password" placeholder="At least 8 characters" />
      <label className="check"><input type="checkbox" name="terms" /> I agree to the seller terms</label>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="submit">Create seller account</button>
    </form>
  );
}

const TABS: ReadonlyArray<readonly [Tab, string]> = [
  ['login', 'Log in'],
  ['signup', 'Sign up'],
];

export default function AuthCard() {
  const [tab, setTab] = useState<Tab>('login');
  return (
    <div className="card" id="auth">
      <div className="tabs" role="tablist">
        {TABS.map(([key, text]) => (
          <button key={key} type="button" role="tab" aria-selected={tab === key}
            className={`tab${tab === key ? ' active' : ''}`} onClick={() => setTab(key)}>
            {text}
          </button>
        ))}
      </div>
      {tab === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  );
}