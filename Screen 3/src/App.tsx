import { useEffect } from "react";
import {
  BadgeCheck,
  Check,
  CheckCircle,
  CheckCircle2,
  CircleCheck,
  Clock,
  Database,
  DollarSign,
  Eye,
  FileCheck,
  FilePlus2,
  Fingerprint,
  HelpCircle,
  Home,
  Landmark,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Repeat,
  RotateCcw,
  ScanFace,
  ScanSearch,
  SearchCheck,
  Shield,
  ShieldAlert,
  ShieldCheck,
  User,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="flex mx-auto flex-col w-285 h-239 overflow-hidden">
          <header className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-12 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                <Landmark className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-bold text-sm leading-5">
                  Good Governance
                </span>
                <span className="leading-tight text-[#71717b] text-xs leading-4">
                  National Digital Registry
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#71717b] text-xs leading-4 flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#2b7fff]" />
                <span>{`Secured & Encrypted`}</span>
              </div>
              <Button
                variant="outline"
                className="text-sm leading-5 px-4 gap-2 h-9"
              >
                <User className="size-4" />
                Sign In
              </Button>
            </div>
          </header>
          <nav className="bg-zinc-100/40 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-12 justify-start items-center gap-1">
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Home className="size-4" />
              Home
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <DollarSign className="size-4" />
              {`Budget & Expenditure`}
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Eye className="size-4" />
              Transparency
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Users className="size-4" />
              Public Figures
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Shield className="size-4" />
              Central KYC
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <MessageSquare className="size-4" />
              Complaints
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <CheckCircle className="size-4" />
              Accountability
            </button>
            <button className="text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <HelpCircle className="size-4" />
              FAQ
            </button>
          </nav>
          <main className="overflow-y-auto flex-1">
            <section className="relative border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-12 py-8 overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBpZGVudGl0eSUyMHZlcmlmaWNhdGlvbiUyMGRpZ2l0YWx8ZW58MXwwfHx8MTc4NTg0ODYyMXww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Secure identity verification"
                  className="object-cover w-full h-full"
                  data-photoid="mT7lXZPjk7U"
                  data-authorname="FlyD"
                  data-authorurl="https://unsplash.com/@flyd2069"
                  data-blurhash="LE9Z*@:X3564M+T?vjxW7sIr-k,G"
                />
                <div className="bg-[#2b7fff]/80 absolute inset-0" />
              </div>
              <div className="relative max-w-2xl text-blue-50 flex flex-col gap-2">
                <Badge className="bg-blue-50/20 text-blue-50 border-black/1 border-0 border-solid gap-1 w-fit">
                  <Fingerprint className="size-3" />
                  Central KYC Registry
                </Badge>
                <h1 className="leading-tight font-bold text-3xl leading-9">
                  Central KYC Registry
                </h1>
                <p className="max-w-xl text-blue-50/90 text-sm leading-5">
                  A unified national platform to verify citizen identity records
                  once and share them securely across government services.
                  Reduce duplication, prevent fraud, and streamline onboarding
                  through trusted Know Your Customer verification.
                </p>
              </div>
            </section>
            <section className="px-12 py-8">
              <div className="grid grid-cols-3 gap-6">
                <Card className="col-span-2 p-6 gap-6">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                        <SearchCheck className="size-4" />
                      </div>
                      <CardTitle className="text-lg leading-7">
                        Verify a KYC Record
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Enter the citizen details below to check verification
                      status in the central registry.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Identity Document Type
                      </Label>
                      <RadioGroup
                        className="flex gap-6"
                        defaultValue="national"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="national" id="national" />
                          <Label
                            htmlFor="national"
                            className="font-normal text-sm leading-5"
                          >
                            National ID
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="passport" id="passport" />
                          <Label
                            htmlFor="passport"
                            className="font-normal text-sm leading-5"
                          >
                            Passport
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="tax" id="tax" />
                          <Label
                            htmlFor="tax"
                            className="font-normal text-sm leading-5"
                          >
                            Tax ID
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="idnum"
                          className="font-medium text-sm leading-5"
                        >
                          ID Number
                        </Label>
                        <Input
                          id="idnum"
                          placeholder="e.g. 1990-88345-021"
                          defaultValue=""
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="name"
                          className="font-medium text-sm leading-5"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="As on document"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="dob"
                          className="font-medium text-sm leading-5"
                        >
                          Date of Birth
                        </Label>
                        <Input id="dob" type="date" defaultValue="" />
                      </div>
                      <div className="flex flex-col justify-end gap-2">
                        <div className="flex pb-2 items-center gap-2">
                          <Checkbox id="consent" defaultChecked={false} />
                          <Label
                            htmlFor="consent"
                            className="font-normal text-[#71717b] text-sm leading-5"
                          >
                            I consent to identity verification
                          </Label>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-2 items-center gap-4">
                      <Button className="bg-[#2b7fff] text-blue-50 px-8 gap-2 h-10">
                        <ShieldCheck className="size-4" />
                        Verify
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-[#71717b] px-4 gap-2 h-10"
                      >
                        <RotateCcw className="size-4" />
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-col gap-4">
                  <Card className="bg-[#2b7fff] text-blue-50 border-black/1 border-0 border-solid p-6 gap-2">
                    <CardHeader className="p-0 gap-1">
                      <div className="flex items-center gap-2">
                        <Database className="size-4" />
                        <CardTitle className="text-blue-50 text-sm leading-5">
                          Registry Coverage
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex px-0 pt-2 pb-0 flex-col gap-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-2xl leading-8">
                          48.2M
                        </span>
                        <span className="text-blue-50/80 text-xs leading-4">
                          Verified citizen records
                        </span>
                      </div>
                      <div className="text-xs leading-4 flex justify-between items-center">
                        <span className="text-blue-50/80">Linked agencies</span>
                        <span className="font-semibold">214</span>
                      </div>
                      <div className="text-xs leading-4 flex justify-between items-center">
                        <span className="text-blue-50/80">
                          Avg. verify time
                        </span>
                        <span className="font-semibold">1.4s</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="p-6 gap-2">
                    <CardHeader className="p-0 gap-1">
                      <CardTitle className="text-sm leading-5">
                        Need help?
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        Our support desk is available 24/7 for verification
                        issues.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex px-0 pt-2 pb-0 flex-col gap-2">
                      <div className="text-sm leading-5 flex items-center gap-2">
                        <Phone className="size-4 text-[#2b7fff]" />
                        <span>+1 (800) 555-0142</span>
                      </div>
                      <div className="text-sm leading-5 flex items-center gap-2">
                        <Mail className="size-4 text-[#2b7fff]" />
                        <span>kyc-support@gov.org</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            <section className="px-12 pb-8">
              <Card className="border-[#2b7fff]/40 border-0 border-solid hidden p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                        <Check className="size-4" />
                      </div>
                      <div className="flex flex-col">
                        <CardTitle className="text-base leading-6">
                          Verification Result
                        </CardTitle>
                        <span className="text-[#71717b] text-xs leading-4">
                          Reference: KYC-2024-0091823
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid gap-1">
                      <CircleCheck className="size-3" />
                      Verified
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <Tabs defaultValue="summary">
                    <TabsList>
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="agencies">
                        Linked Agencies
                      </TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="summary" className="pt-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="rounded-lg bg-zinc-100 flex p-4 flex-col gap-1">
                          <span className="text-[#71717b] text-xs leading-4">
                            Identity Match
                          </span>
                          <div className="font-semibold text-[#2b7fff] flex items-center gap-1">
                            <CheckCircle2 className="size-4" />
                            Confirmed
                          </div>
                        </div>
                        <div className="rounded-lg bg-zinc-100 flex p-4 flex-col gap-1">
                          <span className="text-[#71717b] text-xs leading-4">
                            Document Status
                          </span>
                          <div className="font-semibold text-[#2b7fff] flex items-center gap-1">
                            <FileCheck className="size-4" />
                            Valid
                          </div>
                        </div>
                        <div className="rounded-lg bg-zinc-100 flex p-4 flex-col gap-1">
                          <span className="text-[#71717b] text-xs leading-4">
                            Risk Level
                          </span>
                          <div className="font-semibold text-[#2b7fff] flex items-center gap-1">
                            <ShieldCheck className="size-4" />
                            Low
                          </div>
                        </div>
                        <div className="rounded-lg bg-zinc-100 flex p-4 flex-col gap-1">
                          <span className="text-[#71717b] text-xs leading-4">
                            Last Updated
                          </span>
                          <div className="font-semibold text-[#71717b] flex items-center gap-1">
                            <Clock className="size-4" />2 days ago
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="agencies" className="pt-4">
                      <div className="flex flex-col gap-2">
                        <div className="rounded-lg bg-zinc-100 text-sm leading-5 flex px-4 py-3 justify-between items-center">
                          <span>Tax Authority</span>
                          <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                            Linked
                          </Badge>
                        </div>
                        <div className="rounded-lg bg-zinc-100 text-sm leading-5 flex px-4 py-3 justify-between items-center">
                          <span>Electoral Commission</span>
                          <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                            Linked
                          </Badge>
                        </div>
                        <div className="rounded-lg bg-zinc-100 text-sm leading-5 flex px-4 py-3 justify-between items-center">
                          <span>Social Welfare Department</span>
                          <Badge variant="outline" className="gap-1">
                            <Clock className="size-3" />
                            Pending
                          </Badge>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="history" className="pt-4">
                      <div className="text-sm leading-5 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#2b7fff]" />
                          <span className="text-[#71717b]">
                            Record re-verified — 12 Mar 2024
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#2b7fff]" />
                          <span className="text-[#71717b]">
                            Document renewed — 04 Jan 2024
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="size-2 rounded-full bg-[#71717b]" />
                          <span className="text-[#71717b]">
                            Initial registration — 21 Aug 2021
                          </span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <div className="text-center rounded-xl border-zinc-200 border-1 border-dashed flex py-10 flex-col justify-center items-center gap-2">
                <div className="size-12 rounded-full bg-zinc-100 text-[#71717b] flex justify-center items-center">
                  <ScanSearch className="size-6" />
                </div>
                <p className="font-medium text-sm leading-5">
                  No verification performed yet
                </p>
                <p className="max-w-sm text-[#71717b] text-xs leading-4">
                  Fill in the details above and press Verify to see the KYC
                  status and linked agency records here.
                </p>
              </div>
            </section>
            <section className="bg-zinc-100/40 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-12 py-8">
              <div className="flex mb-6 flex-col gap-1">
                <h2 className="font-bold text-xl leading-7">
                  Benefits of Central KYC
                </h2>
                <p className="max-w-2xl text-[#71717b] text-sm leading-5">
                  Register once and unlock seamless, secure access across all
                  government services.
                </p>
              </div>
              <div className="grid grid-cols-4 mb-8 gap-4">
                <Card className="p-6 gap-2">
                  <div className="size-10 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <Repeat className="size-5" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Verify Once, Use Everywhere
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    A single verified profile shared securely across agencies.
                  </span>
                </Card>
                <Card className="p-6 gap-2">
                  <div className="size-10 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <ShieldAlert className="size-5" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Fraud Prevention
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Detect duplicate and forged identities in real time.
                  </span>
                </Card>
                <Card className="p-6 gap-2">
                  <div className="size-10 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <Zap className="size-5" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Faster Onboarding
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Cut paperwork and reduce processing times drastically.
                  </span>
                </Card>
                <Card className="p-6 gap-2">
                  <div className="size-10 rounded-lg bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                    <Lock className="size-5" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Data Privacy​
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    End-to-end encryption with consent-based sharing.
                  </span>
                </Card>
              </div>
              <div className="flex mb-6 flex-col gap-1">
                <h2 className="font-bold text-xl leading-7">
                  Registration Steps
                </h2>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-7 font-bold rounded-full bg-[#2b7fff] text-blue-50 text-sm leading-5 flex justify-center items-center">
                      1
                    </div>
                    <FilePlus2 className="size-4 text-[#2b7fff]" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Submit Documents
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Upload your national ID and supporting documents.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-7 font-bold rounded-full bg-[#2b7fff] text-blue-50 text-sm leading-5 flex justify-center items-center">
                      2
                    </div>
                    <ScanFace className="size-4 text-[#2b7fff]" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Biometric Capture
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Complete facial and fingerprint verification.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-7 font-bold rounded-full bg-[#2b7fff] text-blue-50 text-sm leading-5 flex justify-center items-center">
                      3
                    </div>
                    <UserCheck className="size-4 text-[#2b7fff]" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Officer Review
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    A registry officer validates your submission.
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="size-7 font-bold rounded-full bg-[#2b7fff] text-blue-50 text-sm leading-5 flex justify-center items-center">
                      4
                    </div>
                    <BadgeCheck className="size-4 text-[#2b7fff]" />
                  </div>
                  <span className="font-semibold text-sm leading-5">
                    Receive KYC ID
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Get your unique central KYC reference number.
                  </span>
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-zinc-100/60 border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-12 py-6">
            <div className="grid grid-cols-4 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                    <Landmark className="size-4" />
                  </div>
                  <span className="font-bold text-sm leading-5">
                    Good Governance
                  </span>
                </div>
                <p className="text-[#71717b] text-xs leading-4">
                  Building a transparent and accountable public sector through
                  trusted digital services.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">
                  Governance
                </span>
                <span className="text-[#71717b] text-xs leading-4">
                  Transparency
                </span>
                <span className="text-[#71717b] text-xs leading-4">{`Budget & Expenditure`}</span>
                <span className="text-[#71717b] text-xs leading-4">
                  Accountability
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">
                  Services
                </span>
                <span className="text-[#71717b] text-xs leading-4">
                  Central KYC
                </span>
                <span className="text-[#71717b] text-xs leading-4">
                  Complaints
                </span>
                <span className="text-[#71717b] text-xs leading-4">
                  Public Figures
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">Support</span>
                <div className="text-[#71717b] text-xs leading-4 flex items-center gap-2">
                  <Phone className="size-3" />
                  +1 (800) 555-0142
                </div>
                <div className="text-[#71717b] text-xs leading-4 flex items-center gap-2">
                  <Mail className="size-3" />
                  kyc-support@gov.org
                </div>
                <div className="text-[#71717b] text-xs leading-4 flex items-center gap-2">
                  <MapPin className="size-3" />
                  Capitol Plaza, Central District
                </div>
              </div>
            </div>
            <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-6 pt-6 justify-between items-center">
              <span className="text-[#71717b] text-xs leading-4">
                © 2024 National Digital Registry. All rights reserved.
              </span>
              <div className="text-[#71717b] text-xs leading-4 flex items-center gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Accessibility</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
