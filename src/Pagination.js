import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginate({ clickPage, pagesQuant, page }) {
  const [quant, setQuant] = React.useState(0);
  React.useEffect(() => {
    if (pagesQuant) {
      async function bl() {
        let q = await pagesQuant.total_pages;
        console.log(pagesQuant);
        setQuant(q);
        // page = { page };
      }

      bl();
    }
  }, [pagesQuant]);

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={quant}
          color="primary"
          onChange={(_, num) => clickPage(num)}
          page={page}
        />
      </Stack>
    </div>
  );
}
