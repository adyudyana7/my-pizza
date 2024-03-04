import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Ip1 from "../../../assets/Ip1.png";
import Ip2 from "../../../assets/Ip2.png";
import Ip3 from "../../../assets/Ip3.png";
import Ip4 from "../../../assets/Ip4.png";
import Ip5 from "../../../assets/Ip5.png";

function Company() {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        О КОМПАНИИ
      </Typography>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontFamily: "fantasy",
            fontSize: "18px",
            paddingTop: "20px",
            paddingBottom: "30px",
          }}
        >
          «Империя пиццы» - это самая крупная сеть пиццерий и суши в Бишкеке.
          Всего есть 18 филиалов в Бишкеке, Кара-Балте и Канте. Почему выбирают
          «Империю пиццы»: Уникальное и разнообразное меню. Оно включает в себя
          блюда итальянской, японской, европейской и азиатской кухни. «Империя
          пиццы» работает без выходных и перерывов 24 часа 7 дней в неделю.
          Доставка абсолютно бесплатна вне зависимости от зоны доставки. Филиалы
          расположены в разных точках города Бишкек. Помимо акций, у пиццерии
          действует бонусная система, позволяющая копить баллы, с помощью
          которых в дальнейшем можно добавить бесплатное блюдо или напиток к
          своему заказу на филиале. Бонусная система работает в рамках
          мобильного приложения «Империя Пиццы Бишкек». Дисконтная карта
          «Империя пиццы» ценит каждого гостя. Скидочные карты работают с
          помощью мобильного приложения. Теперь каждый гость имеет возможность
          фиксировать свои заказы (включая доставку) и в дальнейшем получать
          скидку согласно сумме потраченных средств. Разнообразный вид досуга.
          Каждый гость найдет тот вид досуга, который ему необходим вне
          зависимости от случая посещения.
        </Typography>
      </Box>
      <Box>
        <Carousel showThumbs={false} showStatus={false}>
          <img width="50%" height="50%" src={Ip1} alt="" className="" />
          <img src={Ip2} alt="" className="" />
          <img src={Ip3} alt="" className="" />
          <img src={Ip4} alt="" className="" />
          <img src={Ip5} alt="" className="" />
        </Carousel>
      </Box>
    </Box>
  );
}
export default Company;
