import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

interface BookCardProps {
    title: string;
    author: string;
    coverPhotoURL: string;
    onAdd?: () => void;
    onRemove?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverPhotoURL, onAdd, onRemove }) => {
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={coverPhotoURL}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {author}
                </Typography>
            </CardContent>
            <CardActions>
                {onAdd && (
                    <Button size="small" color="primary" variant="outlined" onClick={onAdd}>
                        Add to Reading List
                    </Button>
                )}
                {onRemove && (
                    <Button size="small" color="secondary" variant="outlined" onClick={onRemove}>
                        Remove from Reading List
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default BookCard;
