'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { SparklesCore } from '@/components/ui/sparkles';
import { Label } from '@/components/ui/label';
import { Check, Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', { name, email, message });
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // setName('');
      // setEmail('');
      // setMessage('');
      // setIsSubmitted(true);
      // setTimeout(() => {
      //   setIsSubmitted(false);
      // }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { theme } = useTheme();
  const particleColor = theme === 'dark' ? '#fafafa' : '#0a0a0a';

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div
        className="absolute left-10 top-10 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, var(--color-4), transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, var(--color-4), transparent 70%)`,
        }}
      />

      <div className="wrapper relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border bg-secondary/20  backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Get In Touch
                </h2>
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor={particleColor}
                />
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 space-y-6"
                action="https://formsubmit.co/mehedi.hsn.dev@gmail.com"
                method="POST"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      // id="name"
                      // value={name}
                      // onChange={e => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      // id="email"
                      type="email"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      name="email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    // id="message"
                    // value={message}
                    // onChange={e => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    name="message"
                    required
                    className="h-40 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    // disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </motion.div>
                {/* Optional Hidden Fields */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Mail From Portfolio"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" />
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative flex items-center justify-center overflow-hidden p-6 md:p-10"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[445px] overflow-hidden rounded-xl border p-6 text-3xl tracking-tight md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl text-primary">
                  Presenting you with the best UI possible.
                  <div className="absolute -bottom-20 -right-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-bottom-28 md:-right-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      // baseColor={[1, 0, 0.3]}
                      // markerColor={[0, 0, 0]}
                      // glowColor={[1, 0.3, 0.4]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
