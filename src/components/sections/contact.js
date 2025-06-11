'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';
import { SparklesCore } from '../ui/sparkles';
import Image from 'next/image';

export default function ContactSection() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const { theme } = useTheme();
  const particleColor = theme === 'dark' ? '#fafafa' : '#0a0a0a';

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background py-16 md:py-20"
    >
      <div
        className="absolute left-20 top-20 h-[250px] w-[250px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, var(--accent-foreground), transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-20 right-20 h-[250px] w-[250px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, var(--accent-foreground), transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border bg-secondary/20  backdrop-blur-sm">
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
                      type="email"
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
                  <Button type="submit" className="w-full">
                    Send Message
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
              className="relative overflow-hidden min-h-96 w-full flex items-center"
            >
              <Image
                src="/contact2.png"
                alt="abstract chrome design"
                fill
                className="absolute top-0 object-cover right-0 bottom-0 left-0 -z-1 dark:opacity-50"
              />
              <p className="dark:bg-background/60 bg-background/80 p-5 text-center text-lg w-full">
                Any Design In Mind? Let's Discuss
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
