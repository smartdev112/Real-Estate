import Image from "next/image";
import {
    Box,
    Stack,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
    Container,
    FormControl,
    InputLabel,
    TextField,
    Button,
    Link
} from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import {
    homeContents,
    slideContent,
    homeGifContent,
    slideContent1,
} from "@/config/contant";
import { useResponsive } from "@/contexts/ResponsiveContext";

const BootstrapInput = styled(TextField)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
        border: "1px solid",
        borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
        fontSize: 16,
        padding: "10px 12px",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
        ]),
        "&:focus": {
            boxShadow: `${alpha(
                theme.palette.primary.main,
                0.25
            )} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export default function Home() {
    const { matches_1024, matches_900, matches_600, matches_425 } =
        useResponsive();

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <Box
                component="div"
                sx={{
                    bgcolor: "#000000",
                    opacity: 0.65,
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    zIndex: 1,
                }}
            ></Box>
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
                    zIndex: 2,
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
                    backgroundImage:
                        'url("/assets/imgs/Mount-St-Mayfair-p-1080.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        bgcolor: "#000000",
                        opacity: 0.41,
                        height: "988px",
                        width: "100%",
                        position: 'absolute'
                    }}
                ></Box>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    py="110px"
                >
                    <Box color="white" mb="40px" maxWidth="883px" zIndex={1}>
                        <Typography
                            fontSize="30px"
                            textAlign="center"
                            mb="20px"
                        >
                            {homeContents[2].title}
                        </Typography>
                        <Typography fontSize="15px" textAlign="center">
                            {homeContents[2].content}
                        </Typography>
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
                            className="home-service-slide"
                        >
                            {slideContent.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <Card
                                        sx={{
                                            maxWidth: 500,
                                            background: "transparent",
                                            borderRadius: 0,
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            image={data.imgLink}
                                        />
                                        <CardContent
                                            sx={{
                                                pb: "10px !important",
                                                backgroundColor: "#FFFFFF80",
                                            }}
                                        >
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
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box p="10px" maxWidth="883px">
                        <Typography
                            fontSize="20px"
                            mb="20px"
                            textAlign="center"
                        >
                            {homeContents[3].title}
                        </Typography>
                        <Typography
                            fontSize="15px"
                            mb="20px"
                            textAlign="center"
                        >
                            {homeContents[3].content}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: "#03162A", color: "white" }}>
                <Container maxWidth="xl">
                    <Grid container spacing={1} p="100px 0 50px">
                        <Grid
                            container
                            item
                            lg={6}
                            md={12}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box p="10px" maxWidth="457px">
                                <Typography
                                    variant="h2"
                                    fontSize="20px"
                                    mb="20px"
                                    textAlign="center"
                                >
                                    {homeContents[4].title}
                                </Typography>
                                <Typography
                                    fontSize="15px"
                                    mb="20px"
                                    textAlign="center"
                                >
                                    {homeContents[4].content}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            container
                            item
                            lg={6}
                            md={12}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box p="10px" maxWidth="464px">
                                <Typography
                                    variant="h2"
                                    fontSize="20px"
                                    mb="20px"
                                    textAlign="center"
                                >
                                    {homeContents[5].title}
                                </Typography>
                                {homeContents[5].content.map((data, index) => (
                                    <Typography
                                        key={index}
                                        fontSize="15px"
                                        mb="20px"
                                        textAlign="center"
                                    >
                                        {data}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} p="50px 0 100px">
                        {homeGifContent.map((data, index) => (
                            <Grid
                                key={index}
                                container
                                item
                                lg={6}
                                md={12}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box
                                    sx={{
                                        backgroundImage: `url(${data.imgLink})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                        maxWidth: "760px",
                                        width: "100%",
                                        height: "628px",
                                        m: "10px",
                                        overflow: "hidden",
                                        ":hover": {
                                            backgroundImage: `url(${data.gifLink})`,
                                        },
                                    }}
                                >
                                    <Box
                                        component="div"
                                        sx={{
                                            bgcolor: "#000000A8",
                                            height: "628px",
                                            maxWidth: "760px",
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            p: "20px",
                                        }}
                                    >
                                        <Typography
                                            fontSize="23px"
                                            textAlign="center"
                                        >
                                            {data.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box py="50px" sx={{ bgcolor: "#fff" }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box maxWidth="1120px" width="100%">
                        <Typography
                            fontSize="20px"
                            mb="20px"
                            textAlign="center"
                        >
                            Our Partners
                        </Typography>
                        <Swiper
                            slidesPerView={
                                matches_1024
                                    ? 5
                                    : matches_900
                                    ? 4
                                    : matches_600
                                    ? 3
                                    : matches_425
                                    ? 2
                                    : 1
                            }
                            // centeredSlides={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="home-partner-slide"
                        >
                            {slideContent1.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        width="224px"
                                        height="150px"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box
                                            component="img"
                                            src={data}
                                            height="auto"
                                            maxWidth="100%"
                                            m="auto"
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: "#AFC9E2" }} py="40px">
                <Box height="70px" className="only-mobile" />
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box maxWidth="476px" width="100%" display="flex" flexDirection="column" p="10px" gap={2} mb="20px">
                        <Typography fontSize="15px" textAlign="center" maxWidth="456px">
                            Our intentions are to assist our clients in creating
                            their financial goals and to offer creative and
                            flexible financial solutions to help them achieve
                            those goals
                        </Typography>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="name">
                                <Typography fontSize={19}>Name</Typography>
                            </InputLabel>
                            <BootstrapInput
                                id="name"
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="email">
                                <Typography fontSize={19}>Email Address</Typography>
                            </InputLabel>
                            <BootstrapInput
                                error={false}
                                id="email"
                                helperText=""
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <Button sx={{ borderRadius: '30px', background: 'black', color: 'white', height: '40px' }} >SEND</Button>
                        </FormControl>
                    </Box>
                    <Box height="120px" className="only-mobile" />
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                        <Link href="" underline="none"><Typography sx={{ color: '#000', fontSize: 12, ':hover': { color: '#fff' } }}>DISCLOSURE</Typography></Link>
                        <Link href="" underline="none"><Typography sx={{ color: '#000', fontSize: 12, ':hover': { color: '#fff' } }}>CONTACT</Typography></Link>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
