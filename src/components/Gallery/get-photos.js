import axios from 'axios';

export default function({ url, cancelToken, count, tag }) {
  return axios({
    method: 'get',
    url,
    cancelToken,
    params: {
      access_token: '315310155.3a81a9f.092b90b913d34aafa72f8744cec91170',
      count,
    },
    transformResponse: axios.defaults.transformResponse.concat(function(data) {
      let photos = data.data;
      const titleMaxLength = 110;

      if (tag) {
        photos = photos.filter(item => {
          return item.tags.indexOf(tag) !== -1;
        });
      }
      const finalPhotos = photos.map(item => {
        let title = item.caption.text;

        if (title.length > titleMaxLength) {
          const subString = title.substr(0, titleMaxLength - 1);
          title = subString.substr(0, subString.lastIndexOf(' ')) + '...';
        }

        const image = {
          source: item.images.standard_resolution.url,
          thumbnail: item.images.thumbnail.url,
          title,
        };
        if (item.type === 'video') {
          image.source = item.videos.standard_resolution.url;
          image.type = 'video/mp4';
        }
        return image;
      });
      return {
        nextUrl: data.pagination.next_url,
        photos: finalPhotos,
      };
    }),
  });
}
