"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function validate() {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = 'Please enter your email or username.';
    if (!password) next.password = 'Please enter your password.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    alert(`Logged in as: ${email}`);
  }

  return (
    <main className="container">
      <section className="card" role="region" aria-labelledby="login-title">
        <h1 id="login-title" className="heading">بوابة الدخول</h1>
        <p className="subheading" aria-live="polite">Welcome back</p>
        <form className="form" onSubmit={onSubmit} aria-describedby={errors.email || errors.password ? 'form-error' : undefined}>
          <div className="field">
            <label htmlFor="email" className="label">Email or Username</label>
            <input
              id="email"
              name="email"
              className="input"
              type="text"
              autoComplete="username"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            {errors.email && <div id="email-error" role="alert" className="error">{errors.email}</div>}
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              name="password"
              className="input"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            {errors.password && <div id="password-error" role="alert" className="error">{errors.password}</div>}
            <div className="actions" style={{ marginTop: 8 }}>
              <a className="link" href="#" aria-label="Forgot your password? Reset here">Forgot Password</a>
            </div>
          </div>

          <button className="button" type="submit" aria-label="Login">Login</button>
        </form>
        <div id="form-error" className="sr-only" aria-hidden={!errors.email && !errors.password} />
        <footer className="footer" aria-hidden>
          <small>Crafted with a touch of tradition</small>
        </footer>
      </section>
    </main>
  );
}
