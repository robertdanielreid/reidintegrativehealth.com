'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function PasskeyGate({ children }: { children: React.ReactNode }) {
  const [passkey, setPasskey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const authorized = localStorage.getItem('site_authorized');
    if (authorized === 'true') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'BIGDICKROB') {
      localStorage.setItem('site_authorized', 'true');
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthorized === null) return null;

  return (
    <>
      <AnimatePresence>
        {!isAuthorized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            <div className="max-w-md w-full p-8 space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter">Passkey Required</h1>
                <p className="text-muted-foreground italic">
                  Ottawa’s premier integrative health hub. Please enter your access code.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter passkey"
                    value={passkey}
                    onChange={(e) => {
                      setPasskey(e.target.value);
                      if (error) setError(false);
                    }}
                    className={error ? 'border-destructive focus-visible:ring-destructive' : ''}
                    autoFocus
                  />
                  {error && (
                    <p className="text-destructive text-sm font-medium">
                      Incorrect passkey. Please try again.
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full font-bold uppercase tracking-widest bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
                  Enter
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isAuthorized && children}
    </>
  );
}
