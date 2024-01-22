import Image from "next/image";
import { Box, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { homeContents, slideContent, homeGifContent } from "@/config/contant";

export default function Home() {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Box component="div" sx={{ bgcolor: '#000000', opacity: 0.65, height: '100%', width: '100%', position: 'absolute', zIndex: 1 }}></Box>
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
                    zIndex: 2
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Box
                        sx={{
                            background: "white",
                            width: "80px",
                            height: "3px",
                            mb: "80px",
                        }}
                    />
                    <Image
                        decoding="async"
                        width="273"
                        height="128"
                        src="/assets/imgs/bg-preview.png"
                        className="attachment-large size-large wp-image-1222"
                        alt=""
                        loading="lazy"
                    />
                    <Typography
                        variant="h2"
                        color="white"
                        sx={{
                            mt: "10px",
                            fontSize: {
                                lg: "72px",
                                md: "54px",
                                sm: "32px",
                                xs: "32px",
                            },
                            textAlign: "center",
                        }}
                    >
                        {homeContents[0].title}
                    </Typography>
                </Stack>
            </Box>
            <Box>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    p="160px 0 50px"
                >
                    <Box p="10px" maxWidth="900px">
                        <Typography
                            fontSize="20px"
                            textAlign="center"
                            color="#2D2D2D"
                            mb="20px"
                        >
                            {homeContents[1].title}
                        </Typography>
                        {homeContents[1].content.map((data, index) => (
                            <Typography
                                key={index}
                                fontSize="15px"
                                textAlign="center"
                                mb="20px"
                                color="#37373D"
                            >
                                {data}
                            </Typography>
                        ))}
                    </Box>
                </Stack>
            </Box>
            <Box
                sx={{
                    backgroundImage: 'url("/assets/imgs/Mount-St-Mayfair-p-1080.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center left',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    overflow: 'hidden'
                }}
            >
                <Box component="div" sx={{ bgcolor: '#000000', opacity: 0.57, filter: 'brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )', height: '100%', width: '100%', position: 'absolute' }}></Box>
                <Stack direction="column" justifyContent="center" alignItems="center" py="110px">
                    <Box color="white" mb="40px" maxWidth="883px" zIndex={1}>
                        <Typography fontSize="30px" textAlign="center" mb="20px">{homeContents[2].title}</Typography>
                        <Typography fontSize="15px" textAlign="center">{homeContents[2].content}</Typography>
                    </Box>
                    <Box maxWidth="1000px" zIndex={1}>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={2}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 3,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Pagination]}
                        >
                            {slideContent.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <Card sx={{ maxWidth: 500, background: 'transparent', borderRadius: 0 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            image={data.imgLink}
                                        />
                                        <CardContent sx={{ pb: '10px !important', backgroundColor: '#FFFFFF80' }}>
                                            <Typography
                                                gutterBottom
                                                textAlign="center"
                                                sx={{ opacity: 1 }}
                                                fontSize="22px"
                                                fontFamily="inherit"
                                                fontWeight="500"
                                            >
                                                {data.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Stack>
            </Box>
            <Box my="45px" py="50px">
                <Stack direction="column" justifyContent="center" alignItems="center">
                    <Box p="10px" maxWidth="883px">
                        <Typography fontSize="20px" mb="20px" textAlign="center">{homeContents[3].title}</Typography>
                        <Typography fontSize="15px" mb="20px" textAlign="center">{homeContents[3].content}</Typography>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: '#03162A', color: 'white' }}>
                <Stack direction="row" justifyContent="space-around" p="100px 0 50px">
                    <Box></Box>
                    <Box p="10px" maxWidth="457px">
                        <Typography variant="h2" fontSize="20px" mb="20px" textAlign="center">{homeContents[4].title}</Typography>
                        <Typography fontSize="15px" mb="20px" textAlign="center">{homeContents[4].content}</Typography>
                    </Box>
                    <Box p="10px" maxWidth="464px">
                        <Typography variant="h2" fontSize="20px" mb="20px" textAlign="center">{homeContents[5].title}</Typography>
                        {homeContents[5].content.map((data, index) => (
                            <Typography key={index} fontSize="15px" mb="20px" textAlign="center">{data}</Typography>
                        ))}
                    </Box>
                    <Box></Box>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" gap={1} p="50px 0 100px">
                    {homeGifContent.map((data, index) => (
                        <Box key={index} sx={{
                            backgroundImage: `url(${data.imgLink})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'left bottom',
                            backgroundRepeat: 'no-repeat',
                            width: '760px',
                            height: '628px',
                            ":hover": {
                                backgroundImage: `url(${data.gifLink})`,
                            }
                        }}>
                            <Box component="div" sx={{ bgcolor: '#000000A8', height: '628px', width: '760px', position: 'absolute' }}></Box>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}
