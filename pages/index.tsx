import Image from "next/image";
import { Box, Stack, Divider, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    position: "absolute",
                }}
            >
                <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    src="https://lmv-h.com/wp-content/uploads/2023/07/yt5s.io-Stunning-Estate-_-Award-Winning-Kitchen-_-Home-Tour.mp4#t=31,180"
                    style={{
                        height: "100%",
                        position: "absolute",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        top: "50%",
                        left: "50%",
                        maxWidth: "100%",
                        width: "100%",
                    }}
                ></video>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '100%' }}
                >
                    <Box sx={{ background: 'white', width: '80px', height: '3px', mb: '80px' }} />
                    <Image
                        decoding="async"
                        width="273"
                        height="128"
                        src="/assets/imgs/bg-preview.png"
                        className="attachment-large size-large wp-image-1222"
                        alt=""
                        loading="lazy"
                    />
                    <Typography variant="h2" color='white' sx={{ mt: '10px', fontSize: { lg: '72px', md: '54px', sm: '32px', xs: '32px' }, textAlign: 'center' }}>WELCOME TO OUR WEBSITE</Typography>
                </Stack>
            </Box>
        </Box>
    );
}
