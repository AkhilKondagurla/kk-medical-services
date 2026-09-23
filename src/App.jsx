import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material";

import {
  Favorite,
  MedicalServices,
  Vaccines,
  Bloodtype,
  MonitorHeart,
  LocalHospital,
  AccessibilityNew,
  Home,
  Phone,
  Email,
  Language,
  ArrowRight,
  WaterDrop,
  Healing,
  HealthAndSafety,
} from "@mui/icons-material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

/* =========================================================
   THEME
========================================================= */

const theme = createTheme({
  typography: {
    fontFamily:
      '"Arial", "Helvetica Neue", sans-serif',
  },
  palette: {
    primary: {
      main: "#08776c",
    },
  },
});

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Dressings",
    icon: <Healing />,
  },
  {
    title: "Injections",
    subtitle: "(IM, IV, SC)",
    icon: <Vaccines />,
  },
  {
    title: "Foley Catheterization",
    icon: <LocalHospital />,
  },
  {
    title: "Ryle's Tube Insertion",
    icon: <MedicalServices />,
  },
  {
    title: "Blood Tests at Home",
    icon: <Bloodtype />,
  },
  {
    title: "IV Fluids Administration",
    icon: <WaterDrop />,
  },
  {
    title: "Vitals Monitoring",
    subtitle: "[BP, SPO2, HR, etc.]",
    icon: <MonitorHeart />,
  },
  {
    title: "GRBS Checking",
    icon: <HealthAndSafety />,
  },
  {
    title: "Physiotherapy Services",
    icon: <AccessibilityNew />,
  },
];

/* =========================================================
   LOGO
========================================================= */

function Logo() {
  return (
    <Box
      sx={{
        width: {
          xs: 70,
          sm: 82,
          md: 95,
        },
        height: {
          xs: 70,
          sm: 82,
          md: 95,
        },
        borderRadius: "14px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: 48,
            sm: 55,
            md: 62,
          },
          height: {
            xs: 40,
            sm: 46,
            md: 52,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Favorite
          sx={{
            position: "absolute",
            fontSize: {
              xs: 43,
              sm: 50,
              md: 56,
            },
            color: "#4a9ca5",
            transform: "rotate(-15deg)",
          }}
        />

        <Typography
          sx={{
            position: "relative",
            zIndex: 2,
            fontSize: {
              xs: 22,
              sm: 25,
              md: 28,
            },
            fontWeight: 900,
            color: "#278c72",
            letterSpacing: "-3px",
          }}
        >
          KK
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: {
            xs: 6,
            sm: 7,
            md: 8,
          },
          fontWeight: 800,
          color: "#263f42",
          textAlign: "center",
          lineHeight: 1.1,
          mt: 0.2,
        }}
      >
        KK MEDICAL
        <br />
        SERVICES
      </Typography>
    </Box>
  );
}

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #08776c 0%, #0b6d65 50%, #075e58 100%)",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: {
            xs: 1.5,
            sm: 3,
            md: 4,
          },
          pt: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 1.5,
            sm: 2.5,
            md: 3,
          }}
        >
          <Logo />

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontSize: {
                  xs: "clamp(25px, 7vw, 40px)",
                  sm: "clamp(34px, 5vw, 52px)",
                  md: "clamp(42px, 5vw, 68px)",
                },
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: {
                  xs: "normal",
                  sm: "nowrap",
                },
                textShadow:
                  "2px 3px 3px rgba(0,0,0,0.35)",
              }}
            >
              KK MEDICAL SERVICES
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            textAlign: "center",
            py: {
              xs: 1.2,
              sm: 1.5,
              md: 2,
            },
          }}
        >
          <Typography
            sx={{
              fontFamily:
                '"Brush Script MT", "Segoe Script", cursive',
              fontSize: {
                xs: "clamp(18px, 5vw, 27px)",
                sm: "clamp(22px, 3vw, 32px)",
                md: "clamp(26px, 3vw, 38px)",
              },
              fontWeight: 600,
            }}
          >
            Compassionate Care, Delivered to Your Door.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* =========================================================
   SERVICES CARD
========================================================= */

function ServicesCard() {
  return (
    <Paper
      elevation={8}
      sx={{
        height: "100%",
        borderRadius: {
          xs: "18px",
          sm: "22px",
          md: "25px",
        },
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #f7ffff 0%, #edfafa 100%)",
        border: "1px solid rgba(255,255,255,0.8)",
      }}
    >
      <Box
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          pt: {
            xs: 2,
            sm: 2.5,
            md: 2.5,
          },
          pb: {
            xs: 1.5,
            sm: 2,
          },
        }}
      >
        <Typography
          sx={{
            color: "#143d3d",
            fontWeight: 900,
            fontSize: {
              xs: "clamp(23px, 6vw, 30px)",
              sm: "clamp(26px, 4vw, 34px)",
              md: "clamp(28px, 3vw, 38px)",
            },
            lineHeight: 1.1,
            mb: {
              xs: 1.5,
              sm: 2,
            },
          }}
        >
          OUR AT-HOME SERVICES
        </Typography>

        <Stack spacing={{ xs: 0.7, sm: 1, md: 0.7 }}>
          {services.map((service, index) => (
            <Stack
              key={service.title}
              direction="row"
              alignItems="center"
              spacing={{
                xs: 0.7,
                sm: 1,
              }}
              sx={{
                minHeight: {
                  xs: 38,
                  sm: 42,
                  md: 40,
                },
              }}
            >
              <ArrowRight
                sx={{
                  color: "#173e45",
                  fontSize: {
                    xs: 18,
                    sm: 21,
                    md: 24,
                  },
                  flexShrink: 0,
                }}
              />

              <Box
                sx={{
                  width: {
                    xs: 32,
                    sm: 38,
                    md: 43,
                  },
                  height: {
                    xs: 32,
                    sm: 38,
                    md: 43,
                  },
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#28545a",
                }}
              >
                {React.cloneElement(service.icon, {
                  sx: {
                    fontSize: {
                      xs: 29,
                      sm: 34,
                      md: 39,
                    },
                  },
                })}
              </Box>

              <Typography
                component="div"
                sx={{
                  color: "#8a2923",
                  fontWeight: 800,
                  fontSize: {
                    xs: "clamp(16px, 4.4vw, 20px)",
                    sm: "clamp(17px, 2.5vw, 22px)",
                    md: "clamp(18px, 2vw, 25px)",
                  },
                  lineHeight: 1.15,
                }}
              >
                {service.title}

                {service.subtitle && (
                  <Typography
                    component="span"
                    sx={{
                      color: "#111",
                      fontWeight: 500,
                      fontSize: "0.78em",
                      ml: 0.8,
                    }}
                  >
                    {service.subtitle}
                  </Typography>
                )}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}

/* =========================================================
   INSURANCE CARD
========================================================= */

function InsuranceCard() {
  return (
    <Paper
      elevation={7}
      sx={{
        height: "auto",
        borderRadius: {
          xs: "18px",
          sm: "22px",
          md: "25px",
        },
        p: {
          xs: 2,
          sm: 2.5,
          md: 3.25,
        },
        background:
          "linear-gradient(180deg, #a9e2dc 0%, #8bd2cb 100%)",
        border: "1px solid rgba(255,255,255,0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HDFC ERGO */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 320,
          background: "#fff",
          borderRadius: "15px",
          p: {
            xs: 1.5,
            sm: 2,
            md: 3.25,
          },
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.18)",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            background: "#e32929",
            maxWidth: 175,
            mx: "auto",
            px: 1,
            py: 1,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: {
                xs: 26,
                sm: 30,
              },
              lineHeight: 0.9,
            }}
          >
            HDFC
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: {
                xs: 26,
                sm: 30,
              },
              lineHeight: 0.9,
            }}
          >
            ERGO
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 900,
            fontSize: {
              xs: 18,
              sm: 21,
            },
          }}
        >
          HDFC ERGO
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 16,
              sm: 19,
            },
          }}
        >
          Insurance Partner
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily:
            '"Brush Script MT", "Segoe Script", cursive',
          fontSize: {
            xs: 31,
            sm: 38,
            md: 42,
          },
          color: "#071e21",
          mt: {
            xs: 2,
            sm: 2.5,
          },
        }}
      >
        Take it easy!
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 900,
          color: "#071e21",
          fontSize: {
            xs: 22,
            sm: 26,
            md: 29,
          },
          lineHeight: 1.05,
          mt: 1,
        }}
      >
        Seamless Insurance
        <br />
        Process
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#111",
          fontSize: {
            xs: 17,
            sm: 20,
            md: 22,
          },
          lineHeight: 1.15,
          mt: 2,
          maxWidth: 360,
        }}
      >
        We accept a wide range
        <br />
        of insurance plans.
        <br />
        For more information,
        <br />
        please contact us.
      </Typography>
    </Paper>
  );
}

/* =========================================================
   MESSAGE BANNER
========================================================= */

function MessageBanner() {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        background:
          "linear-gradient(90deg, #54219b 0%, #6b2bb5 50%, #54219b 100%)",
        color: "#fff",
        borderRadius: {
          xs: "25px",
          sm: "35px",
          md: "50px",
        },
        overflow: "hidden",
        boxShadow:
          "0 5px 12px rgba(40,20,80,0.25)",
      }}
    >
      <Grid container>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: {
              xs: 2,
              sm: 3,
            },
            py: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
            borderRight: {
              xs: "none",
              md: "1px solid rgba(255,255,255,0.55)",
            },
            borderBottom: {
              xs: "1px solid rgba(255,255,255,0.4)",
              md: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "clamp(18px, 5vw, 25px)",
                sm: "clamp(21px, 3vw, 29px)",
                md: "clamp(23px, 2.5vw, 31px)",
              },
              lineHeight: 1.15,
              fontFamily:
                '"Noto Sans Telugu", Arial, sans-serif',
            }}
          >
            ఈ సర్వీసెస్ మీ
            <br />
            యొక్క ఇంటి వద్దకు
            <br />
            వచ్చి చేయబడును
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: {
              xs: 2,
              sm: 3,
            },
            py: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(19px, 5vw, 27px)",
                sm: "clamp(22px, 3vw, 30px)",
                md: "clamp(24px, 2.5vw, 32px)",
              },
              lineHeight: 1.15,
              fontWeight: 500,
            }}
          >
            We provide these
            <br />
            services by coming to
            <br />
            your doorstep.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

/* =========================================================
   24/7 BANNER
========================================================= */

function AvailabilityBanner() {
  return (
    <Box
      sx={{
        maxWidth: 1400,
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: {
          xs: 0.7,
          sm: 1,
          md: 1.5,
        },
        px: {
          xs: 1,
          sm: 2,
        },
        py: {
          xs: 1,
          sm: 1.2,
        },
        background:
          "linear-gradient(90deg, #fff18d 0%, #fff7b4 50%, #fff18d 100%)",
        color: "#793318",
        textAlign: "center",
      }}
    >
      <Home
        sx={{
          fontSize: {
            xs: 25,
            sm: 31,
            md: 36,
          },
          color: "#28614c",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontWeight: 900,
          fontSize: {
            xs: "clamp(14px, 4vw, 19px)",
            sm: "clamp(17px, 2.5vw, 23px)",
            md: "clamp(19px, 2vw, 26px)",
          },
          lineHeight: 1.15,
        }}
      >
        HOME VISITS FOR ALL SERVICES 24/7
        <Box
          component="span"
          sx={{
            mx: {
              xs: 0.5,
              sm: 1,
            },
          }}
        >
          |
        </Box>
        QUICK & CONFIDENTIAL
      </Typography>
    </Box>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, #f7f0bd 0%, #fff8d6 100%)",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
          },
          py: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={{
            xs: 1.5,
            sm: 2,
          }}
        >
          {/* Phone */}
          <Grid
            size={{ xs: 12, md: 6 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
              spacing={{
                xs: 1,
                sm: 1.5,
              }}
            >
              <Phone
                sx={{
                  fontSize: {
                    xs: 35,
                    sm: 45,
                    md: 52,
                  },
                  color: "#08776c",
                }}
              />

              <Typography
                sx={{
                  color: "#08776c",
                  fontWeight: 900,
                  fontSize: {
                    xs: "clamp(28px, 8vw, 38px)",
                    sm: "clamp(35px, 5vw, 47px)",
                    md: "clamp(40px, 4vw, 53px)",
                  },
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                +91 90590 89983
              </Typography>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid
            size={{ xs: 12, md: 6 }}
          >
            <Stack
              spacing={0.5}
              sx={{
                borderLeft: {
                  xs: "none",
                  md: "1px solid rgba(0,0,0,0.25)",
                },
                pl: {
                  xs: 0,
                  md: 3,
                },
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.7}
              >
                <Email
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 21,
                    },
                    color: "#333",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: {
                      xs: 14,
                      sm: 17,
                      md: 19,
                    },
                    color: "#333",
                    wordBreak: "break-word",
                  }}
                >
                  mailto:contact@kkmedical.com
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={0.7}
              >
                <Language
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 21,
                    },
                    color: "#333",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: {
                      xs: 14,
                      sm: 17,
                      md: 19,
                    },
                    color: "#333",
                  }}
                >
                  www.kkmedical.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #d9f3f0 0%, #eaf9f7 45%, #d7f0ef 100%)",
          overflowX: "hidden",
        }}
      >
        <Header />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            maxWidth: 1440,
            mx: "auto",
            px: {
              xs: 1.5,
              sm: 3,
              md: 4,
            },
            py: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* Services + Insurance */}
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2.5,
              md: 3,
            }}
            alignItems="stretch"
          >
            <Grid
              size={{ xs: 12, md: 7 }}
            >
              <ServicesCard />
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
            >
              <InsuranceCard />
            </Grid>
          </Grid>

          {/* Message */}
          <Box
            sx={{
              mt: {
                xs: 2,
                sm: 3,
                md: 4,
              },
            }}
          >
            <MessageBanner />
          </Box>
        </Box>

        {/* Availability */}
        <AvailabilityBanner />

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;