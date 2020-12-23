"use-strict";
import { useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import OrderFlow from "../components/OrderFlow";
import { White } from "../components/Colors";
import FindOrder from "../components/FindOrder";
import Paragraph from "../components/Paragraph";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Home(props) {
  const style = useStyles();
  const history = useHistory();
  const { images, orderDis } = props;

  const goToDish = () => {
    history.push("/dishes");
  };

  useEffect(() => {
    orderDis();
  }, [orderDis]);

  return (
    <Grid container>
      <Grid container className={style.row}>
        <Grid item sx={12} sm={12} md={8}>
          <div className={style.sliderCon}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets
              additionalClass={style.images}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={style.orderFlow}>
          <OrderFlow action={() => goToDish()} />
        </Grid>
      </Grid>

      <Grid container className={style.row}>
        <Grid item xs={12} sm={6} className={style.findOrderCon}>
          <FindOrder />
        </Grid>
        <Grid item xs={12} sm={6} className={style.contentCon}>
          <Paragraph uppercase>some content in here</Paragraph>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  images: state.images.images,
});

const mapDispatchToProps = (dispatch) => ({
  orderDis: (payload) => dispatch({ type: "CLEAR_ORDER" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const useStyles = makeStyles((theme) => ({
  row: { flexGrow: 1 },
  orderFlow: { position: "relative", background: White },
  findOrderCon: {
    padding: 30,
    background: White,
  },
  contentCon: { background: White },
}));

//import PropTypes from "prop-types";
//Home.defaultProps = {};
//Home.propTypes = {};
