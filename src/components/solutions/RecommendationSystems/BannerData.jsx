import image from './Images/recommed.jpg';

const BannerData = [
    {
        heading: "Understanding Recommendation Systems",
        details:
          "",
        points: [
          "Recommendation systems enable businesses to deliver tailored suggestions and enhance the customer experience. High-quality recommendations boost customer interaction and influence customer lifetime value.",
          "MAQ Software develops solutions customized and adapted based on each company’s performance metrics.",
        ],
        img: (
          <img
            src={image}
            alt=""
            height={250}
          />
        ),
      },
]

export default BannerData;