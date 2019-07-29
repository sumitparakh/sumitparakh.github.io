import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';
import { Link } from '@reach/router';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        cursor: 'pointer',
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
}));

const CustomChip = (props) => {
    const chipClass = useStyles();
    return (
        <Link to={props.tag} style={{ textDecoration: 'none' }} >
            <Chip className={chipClass.chip} color="primary1" label={props.tag} key={props.index} ></Chip>
        </Link>
    )
};

export default class BlogPostTagList extends React.Component {
    render() {
        if (this.props && this.props.tags) {
            return (
                this.props.tags.map((tag, index) => <CustomChip tag={tag} index={index}></CustomChip>)
            );
        }
        return <></>;
    }
}