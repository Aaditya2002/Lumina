"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ContentRow } from "@/components/content-row"
import { continueWatching } from "@/lib/data"
import { PremiumCTA } from "@/components/premium-cta"
import { Edit, Save, User, Bell, Shield, CreditCard, LogOut } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary/30">
                <AvatarImage src="https://v0.blob.com/yx7jm-avatar.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold font-playfair tracking-tight text-glow">John Doe</h1>
                <p className="text-muted-foreground">Premium Member since January 2024</p>
              </div>

              <div className="md:ml-auto">
                <Button variant="outline" className="gap-2 premium-border" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 premium-border bg-background/50">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Preferences</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Billing</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="pt-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Personal Information</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" disabled={!isEditing} className="premium-input" />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          defaultValue="1990-01-01"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Profile Settings</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="johndoe" disabled={!isEditing} className="premium-input" />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="language">Language</Label>
                        <select
                          id="language"
                          defaultValue="en"
                          disabled={!isEditing}
                          className="premium-input flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="ja">Japanese</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="avatar">Profile Picture</Label>
                        <Input id="avatar" type="file" disabled={!isEditing} className="premium-input" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="public-profile">Public Profile</Label>
                          <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
                        </div>
                        <Switch id="public-profile" defaultChecked={true} disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Continue Watching</h2>
                  <ContentRow title="" contents={continueWatching} showProgress />
                </div>

                <div className="pt-4">
                  <Button variant="destructive" className="gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="pt-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Playback Settings</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="autoplay">Autoplay Next Episode</Label>
                          <p className="text-sm text-muted-foreground">Automatically play the next episode</p>
                        </div>
                        <Switch id="autoplay" defaultChecked={true} disabled={!isEditing} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="preview">Autoplay Previews</Label>
                          <p className="text-sm text-muted-foreground">Play previews while browsing</p>
                        </div>
                        <Switch id="preview" defaultChecked={true} disabled={!isEditing} />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="quality">Default Streaming Quality</Label>
                        <select
                          id="quality"
                          defaultValue="auto"
                          disabled={!isEditing}
                          className="premium-input flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="auto">Auto</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="ultra">Ultra HD</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Notification Preferences</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notif">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch id="email-notif" defaultChecked={true} disabled={!isEditing} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notif">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                        </div>
                        <Switch id="push-notif" defaultChecked={true} disabled={!isEditing} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="new-content">New Content Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified about new releases</p>
                        </div>
                        <Switch id="new-content" defaultChecked={true} disabled={!isEditing} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="recommendations">Recommendations</Label>
                          <p className="text-sm text-muted-foreground">Get personalized content recommendations</p>
                        </div>
                        <Switch id="recommendations" defaultChecked={true} disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="pt-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Password & Security</h2>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          disabled={!isEditing}
                          className="premium-input"
                        />
                      </div>

                      {isEditing && <Button className="w-full premium-button">Update Password</Button>}
                    </div>
                  </div>

                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Two-Factor Authentication</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="2fa">Enable 2FA</Label>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                        </div>
                        <Switch id="2fa" defaultChecked={false} disabled={!isEditing} />
                      </div>

                      <div className="pt-4">
                        <Button variant="outline" className="w-full premium-border" disabled={!isEditing}>
                          Set Up Two-Factor Authentication
                        </Button>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-sm font-medium mb-2">Recent Login Activity</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Chrome on Windows</span>
                            <span className="text-muted-foreground">Today, 10:30 AM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>iPhone App</span>
                            <span className="text-muted-foreground">Yesterday, 8:15 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Safari on MacOS</span>
                            <span className="text-muted-foreground">May 8, 2024, 3:45 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="billing" className="pt-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Subscription Plan</h2>

                    <div className="space-y-4">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Premium Plan</h3>
                            <p className="text-sm text-muted-foreground">4K Ultra HD + HDR</p>
                          </div>
                          <span className="text-lg font-semibold">$14.99/mo</span>
                        </div>
                        <div className="mt-4 text-sm">
                          <p>Next billing date: June 15, 2024</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button variant="outline" className="w-full premium-border">
                          Change Plan
                        </Button>
                      </div>

                      <div className="pt-2">
                        <Button variant="outline" className="w-full text-red-400 border-red-400/30 hover:bg-red-400/10">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 premium-card p-6">
                    <h2 className="text-xl font-semibold">Payment Method</h2>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between border border-border rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 05/2026</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" disabled={!isEditing}>
                          Edit
                        </Button>
                      </div>

                      {isEditing && (
                        <Button variant="outline" className="w-full premium-border">
                          Add Payment Method
                        </Button>
                      )}

                      <div className="pt-4">
                        <h3 className="text-sm font-medium mb-2">Billing History</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>May 15, 2024</span>
                            <span className="text-muted-foreground">$14.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span>April 15, 2024</span>
                            <span className="text-muted-foreground">$14.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span>March 15, 2024</span>
                            <span className="text-muted-foreground">$14.99</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button variant="outline" className="w-full premium-border">
                          View Full Billing History
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <PremiumCTA />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
