import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';
import client from '../../graphqlApollo';
import { gql } from '@apollo/client';
import { Container, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, TableSortLabel } from '@mui/material';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useCookies } from 'react-cookie';


const GET_ALL_ARTICLES = gql(`
  query {
    getAllArticlesPartner {
      status
      devMessage
      userMessage
      articles {
        id
        name
        brand
        email
        country { name }
        material { name }
        transport { name }
        brandlogo
        environnementdesc
        ethicaldesc
        branddesc
        price
        rgb
        ethical_score
        ecological_score
        local_score
        type
        redirectnumber
        lastshown
        lastclick
      }
    }
  }
`);

const UPDATE_ARTICLE = gql(`
  mutation UpdateArticle(
    $id: String!,
    $name: String!,
    $brand: String!,
    $country: String!,
    $material: String!,
    $transport: String!,
    $price: String!,
    $brandlogo: String!,
    $description: String!,
    $branddesc: String!,
    $environnementdesc: String!,
    $ethicaldesc: String!,
    $type: String!,
    $redirectnumber: String!,
    $lastshown: String!,
    $lastclick: String!,
  ) {
    updateArticlePartnerAdmin(
      id: $id,
      name: $name,
      brand: $brand,
      country: $country,
      material: $material,
      transport: $transport,
      price: $price,
      brandlogo: $brandlogo,
      description: $description,
      branddesc: $branddesc,
      environnementdesc: $environnementdesc,
      ethicaldesc: $ethicaldesc,
      type: $type,
      redirectnumber: $redirectnumber,
      lastshown: $lastshown,
      lastclick: $lastclick,
    ) {
      status
      devMessage
      userMessage
    }
  }
`);
 
type Order = 'asc' | 'desc';

interface Article {
  id: string;
  name: string;
  brand: string;
  email: string;
  country: { id: string, name: string }[] | string;
  material: { name: string }[];
  transport: { id: string, name: string }[] | string;
  brandlogo: string;
  environnementdesc: string;
  ethicaldesc: string;
  branddesc: string;
  price: string;
  rgb: number[];
  ethical_score: number;
  ecological_score: number;
  local_score: number;
  type: string;
  redirectnumber: number;
  lastshown: Date;
  lastclick: Date;
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Article) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  articles: Array<Article>;
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  selected: Array<string>;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Article;
  label: string;
  numeric: boolean;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const [cookies] = useCookies(['token']);

  const { numSelected, selected } = props;
  const DELETE_ARTICLE_PARTNER = gql(`
    query deleteArticlePartner($id: String!) {
      deleteArticlePartner(id: $id) {
        status
        devMessage
        userMessage
      }
    }
  `);


  const handleDeleteArticle = async (id: string) => {
    try {
      const { data } = await client.query({
        query: DELETE_ARTICLE_PARTNER,
        variables: {
          id: id,
        },
        context: {
          headers: {
              authorization: "Bearer " + cookies.token,
          },
      }
      });

      if (data.deleteArticlePartner.status === 'ArticlePartner deleted successfully') {
        alert('Article deleted successfully.');
      } else {
        alert('Failed to delete article.');
      }
    } catch (error) {
      alert('An error occurred while deleting the article.');  
    }

  };

  const handleClickDelete = () => {
    alert(`${numSelected} selected for deletion.`);
    selected.forEach(async (id) => await handleDeleteArticle(id));
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Liste des articles partenaires
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete" onClick={handleClickDelete}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, articles } = props;
  const createSortHandler = (property: keyof Article) => (event: MouseEvent<unknown>) => {onRequestSort(event, property);};
  const insertHeadCells = (article: Article) => {
    const headCells: HeadCell[] = [];
  
    Object.keys(article).map((key) => {
      
      if (key !== 'email' && key !== 'ethicaldesc' && key !== 'environnementdesc' && key !== 'brandlogo'
      && key != "redirectnumber" && key != "lastshown" && article[key as keyof Article] !== "ArticlePartnerStruct") 
      {
        headCells.push({disablePadding:false, id: key as keyof Article, label: key, numeric: typeof article[key as keyof Article] === "number"});
      }
    });
    return headCells;
  }
  const headCells: readonly HeadCell[] = insertHeadCells(articles[0]);

  return (
    <TableHead>
      <TableRow>
      <TableCell padding="checkbox">
          
        </TableCell>
      <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all articles',
            }}
          />

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ textAlign: 'center' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function AdminArticlesTable() {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Article>('id');
  const [selected, setSelected] = useState< string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [cookies] = useCookies(['token']);
  const fetchArticles = async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_ARTICLES,
        context: {
          headers: {
              authorization: "Bearer " + cookies.token,
          },
      }
      });
      if (data.getAllArticlesPartner.articles) {
        setArticles(data.getAllArticlesPartner.articles);
      } else {
        alert("Les articles n'ont pas été récupérés ou sont vides.");
      }
    } catch (error) {
      alert("Erreur lors de la récupération des articles:" + error);
    }
  };


  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Article,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = articles.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const searchArticles = (articles: Article[], term: string): Article[] => {
    if (!term) return articles;
    const lowercaseTerm = term.toLowerCase();
    const res = articles.filter(article => Object.values(article).some(value => typeof value === 'string' && value.toLowerCase().includes(lowercaseTerm)))

    return res;
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const renderTableCellContent = (article: Article, key: keyof Article, labelId: string) => {
    if (
      key !== 'email' && key !== 'ethicaldesc' && key !== 'environnementdesc' && key !== 'brandlogo' &&
      key !== "redirectnumber" && key !== "lastshown" && article[key as keyof Article] !== "ArticlePartnerStruct"
    ) {
      return (
        <TableCell
          id={labelId}
          scope="row"
          key={key}
          size='small'
          sx={{ textAlign: 'center', fontSize: '1rem' }}
        >
          {Array.isArray(article[key]) ? (
            (article[key] as { name: string }[]).map((item) => item.name).join(', ')
          ) : (
            String(article[key])
          )}
        </TableCell>
      );
    } else {
      return null;
    }
  };

  const handleEditClick = (article: Article) => {
    setSelectedArticle(article);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleUpdateArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedArticle) {
      try {
        const country = Array.isArray(selectedArticle.country) ? selectedArticle.country.map(item => item.name).join(', ') : selectedArticle.country;
        const material = Array.isArray(selectedArticle.material) ? selectedArticle.material.map(item => item.name).join(', ') : selectedArticle.material;
        const transport = Array.isArray(selectedArticle.transport) ? selectedArticle.transport.map(item => item.name).join(', ') : selectedArticle.transport;
        const price: string = (typeof selectedArticle.price) === 'number' ? selectedArticle.price.toString() as string : selectedArticle.price as string; 

        const {data} = await client.mutate({
          mutation: UPDATE_ARTICLE,
          variables: {
            id: selectedArticle.id,
            name: selectedArticle.name,
            brand: selectedArticle.brand,
            country: country,
            material: material,
            transport: transport,
            price: price,
            brandlogo: selectedArticle.brandlogo,
            description: selectedArticle.environnementdesc,
            branddesc: selectedArticle.branddesc,
            environnementdesc: selectedArticle.environnementdesc,
            ethicaldesc: selectedArticle.ethicaldesc,
            type: selectedArticle.type,
            redirectnumber: selectedArticle.redirectnumber,
            lastshown: selectedArticle.lastshown,
            lastclick: selectedArticle.lastclick
          },
          context: {
            headers: {
                authorization: "Bearer " + cookies.token,
            },
        }
        });
        alert(data.updateArticlePartnerAdmin.userMessage);
        setSelectedArticle(undefined);
        setOpenModal(false);
        fetchArticles();
        window.location.reload();
      } catch (error) {
        alert('Error updating article:' + error);
      }
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    if (selectedArticle) {
      setSelectedArticle({
        ...selectedArticle,

        [name]: value,
      });
    }
  };

  const formatValue = (value: string): string => {
    if (Array.isArray(value)) {
      return value.map(item => item.name).join(', ');
    }
    return value;
  };
  return (
    <Container  sx={{ width: '100%', mt: 10}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {articles.length === 0 ? (
          <p>Aucun article trouvé ou pas d'article en base de données.</p>
        ) : (
              <>
                <EnhancedTableToolbar numSelected={selected.length} selected={selected}/>
                
                <TableContainer sx={{ maxHeight: 700, overflowY: 'auto' }}>
                  <TextField
                    label="Rechercher"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    style={{ marginBottom: '-5px' }}
                  />
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={articles.length}
                      articles={articles}
                    />
                    <TableBody>
                      {searchArticles(articles, searchTerm).map((article: Article, index) => {
                        const isItemSelected = isSelected(article.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, article.id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={article.id}
                            selected={isItemSelected}
                            sx={{ cursor: 'pointer' }}
                          >
                            <TableCell padding="checkbox">
                              <Button variant="outlined" onClick={() => handleEditClick(article)}>
                                Modifier
                              </Button>
                            </TableCell>
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                              />
                            </TableCell>
                            {Object.keys(article).map((key) => renderTableCellContent(article, key as keyof Article, labelId))}

                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                >
                  <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 400,
                      bgcolor: 'background.paper',
                      border: '2px solid #000',
                      boxShadow: 24,
                      p: 4,
                      maxHeight: '80vh',
                      overflowY: 'auto',
                    }}
                  >
                    <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                      Modifier l'article
                    </Typography>
                    <form onSubmit={handleUpdateArticle}>
                        {selectedArticle && Object.keys(selectedArticle).map((key) => (
                          <TextField
                            key={key}
                            label={key}
                            name={key}
                            value={typeof selectedArticle[key as keyof Article] === 'string' ? selectedArticle[key as keyof Article] : formatValue(selectedArticle[key as keyof Article] as string) }
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                          />
                        ))}

                      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
                        Enregistrer
                      </Button>
                      <Button onClick={handleCloseModal} variant="outlined" color="secondary" sx={{ mt: 2 }}>
                        Annuler
                      </Button>
                    </form>
                  </Box>
                </Modal>
              </>
        )}
      </Paper>
    </Container>
  );
}
