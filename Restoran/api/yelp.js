import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        "Bearer JYW-8W_6s5xiri0NGUZiNUa7gp_k7chtRe1HtyunD_uzW1wb-A4PP8nFJ3WfpSIPU8wXuw-bvJYYnyRNypTIMj4nX_q6kGr-fkW4ZjuGBh9wUKhsxJQKFH-BZ_ZTZ3Yx"
    }
})

